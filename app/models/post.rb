class Post < ApplicationRecord
  extend OrderAsSpecified

  has_rich_text :content

  enum status: %i[draft published archived], _prefix: true

  belongs_to :user

  validates :title, presence: true
  validates :published_at, presence: true, if: -> { self.status_published? }

  before_validation :update_published_at

  private

  def update_published_at
    self.published_at = Time.now.utc if self.status_published?
  end
end
