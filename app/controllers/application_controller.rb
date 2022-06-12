class ApplicationController < ActionController::Base
  # Since the API is token based, there is no need to pass the CSRF token
  protect_from_forgery with: :null_session

  def serialize(resource)
    if resource.is_a?(ActiveRecord::Relation)
      "#{resource.klass.to_s}Serializer".constantize.new(resource).serializable_hash.to_json
    elsif resource.is_a?(ActiveRecord::Base)
      "#{resource.class.to_s}Serializer".constantize.new(resource).serializable_hash.to_json
    end
  end
end
