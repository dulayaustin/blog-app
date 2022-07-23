require 'rails_helper'
require 'shared_contexts'

RSpec.describe 'Api::V1::Posts', type: :request do
  include_context "api request authentication helper methods"
  include_context "api request global before and after hooks"

  let(:current_user) { create(:user) }
  let!(:posts) { create_list(:post, 3, user: current_user) }

  context 'GET /api/v1/posts' do
    it 'returns all posts' do
      get api_v1_posts_path

      expect(JSON.parse(response.body).dig('data').size).to eq(3)
      expect(response).to have_http_status(:success)
    end
  end

  context 'POSTS /api/v1/posts' do
    it 'create a new post' do
      sign_in(current_user)

      expect {
        post api_v1_posts_path, params: { post: {title: 'Testing post title', content: 'Testing post content'} }
      }.to change { Post.count }.by(+1)

      expect(response).to have_http_status(:success)
    end
  end

  context 'DELETE /api/v1/posts/:id' do

    it 'delete a post' do
      sign_in(current_user)

      expect {
        delete "/api/v1/posts/#{Post.last.id}"
      }.to change { Post.count }.by(-1)


      expect(response).to have_http_status(:no_content)
    end
  end
end
