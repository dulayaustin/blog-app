class UserSerializer
  include JSONAPI::Serializer

  set_key_transform :camel_lower

  attributes :first_name, :last_name, :email

  has_many :posts
end
