require 'rails_helper'

RSpec.describe 'Api::V1::Posts', type: :request do
  context 'GET /api/v1/posts' do
    before(:each) do
      create_list(:post, 3)
    end

    it 'returns all posts' do
      get api_v1_posts_path

      expect(JSON.parse(response.body).dig('data').size).to eq(3)
      expect(response).to have_http_status(:success)
    end
  end

  context 'POSTS /api/v1/posts' do
    it 'create a new post' do
      expect {
        post api_v1_posts_path, params: { post: {title: 'Testing post title', content: 'Testing post content'} }
      }.to change { Post.count }.by(+1)

      expect(response).to have_http_status(:success)
    end
  end

  context 'DELETE /api/v1/posts/:id' do
    let!(:blog_post) { create(:post) }

    it 'delete a post' do
      expect {
        delete "/api/v1/posts/#{blog_post.id}"
      }.to change { Post.count }.by(-1)


      expect(response).to have_http_status(:no_content)
    end
  end
end
