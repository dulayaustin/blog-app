require 'rails_helper'

RSpec.describe Blog, type: :model do
  let(:blog) { build(:blog) }


  context "validations" do
    it "must have a title" do
      expect(blog).to be_valid
    end

    it "cannot have a blank title" do
      blog.title = ''

      expect(blog).to_not be_valid
    end

    context "when status is published" do
      let(:blog) { build(:blog, status: 1, published_at: Time.now.utc) }

      it "must have a published_at" do
        expect(blog).to be_valid
      end
    end
  end
end
