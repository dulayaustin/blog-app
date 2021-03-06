require 'rails_helper'

RSpec.describe Post, type: :model do
  let(:user) { create(:user) }
  let(:blog_post) { build(:post, user: user) }

  context 'validations' do
    it 'must have a title' do
      expect(blog_post).to be_valid
    end

    it 'cannot have a blank title' do
      blog_post.title = ''

      expect(blog_post).to_not be_valid
    end

    context 'when status is published' do
      it 'must have a published_at' do
        blog_post.status = 1
        blog_post.published_at = Time.now.utc

        expect(blog_post).to be_valid
      end
    end
  end
end
