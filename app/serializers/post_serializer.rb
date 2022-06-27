class PostSerializer
  include JSONAPI::Serializer

  set_key_transform :camel_lower

  attributes :title, :content, :status, :published_at, :created_at, :updated_at

  belongs_to :user

  def self.options
    options = Hash.new
    options[:include] = %i[user]
    options
  end
end
