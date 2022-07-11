class PostSerializer
  include JSONAPI::Serializer

  set_key_transform :camel_lower

  attributes :title, :status, :published_at, :created_at, :updated_at
  attribute :content do |object|
    object.content.body&.to_trix_html
  end

  belongs_to :user

  def self.options
    options = Hash.new
    options[:include] = %i[user]
    options
  end
end
