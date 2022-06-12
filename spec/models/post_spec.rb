require 'rails_helper'

RSpec.describe Post, type: :model do
  let(:post) { build(:post) }


  context "validations" do
    it "must have a title" do
      expect(post).to be_valid
    end

    it "cannot have a blank title" do
      post.title = ''

      expect(post).to_not be_valid
    end

    context "when status is published" do
      let(:post) { build(:post, status: 1, published_at: Time.now.utc) }

      it "must have a published_at" do
        expect(post).to be_valid
      end
    end
  end
end
