class Post < ApplicationRecord
  extend OrderAsSpecified

  enum status: {
    draft: 0,
    published: 1,
    archived: 2
  }, _prefix: true

  validates :title, presence: true
  validates :published_at, presence: true, if: -> { self.status_published? }

  before_validation :update_published_at

  searchkick searchable: %i[],
    filterable: %i[status]

  def search_data
    {
      title: title,
      status: status
    }
  end

  private

  def update_published_at
    self.published_at = Time.now.utc if self.status_published?
  end
end
