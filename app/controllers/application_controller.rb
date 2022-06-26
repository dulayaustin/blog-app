class ApplicationController < ActionController::API
  def serialize(resource)
    if resource.is_a?(ActiveRecord::Relation)
      "#{resource.klass.to_s}Serializer".constantize.new(resource).serializable_hash.to_json
    elsif resource.is_a?(ActiveRecord::Base)
      "#{resource.class.to_s}Serializer".constantize.new(resource).serializable_hash.to_json
    end
  end
end
