class PostSerializer
  include JSONAPI::Serializer
  attributes :title, :content, :status, :published_at, :created_at, :updated_at
end
