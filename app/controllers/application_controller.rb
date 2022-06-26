class ApplicationController < ActionController::API
  before_action :configure_permitted_parameters, if: :devise_controller?

  def serialize(resource)
    if resource.is_a?(ActiveRecord::Relation)
      "#{resource.klass.to_s}Serializer".constantize.new(resource).serializable_hash.to_json
    elsif resource.is_a?(ActiveRecord::Base)
      "#{resource.class.to_s}Serializer".constantize.new(resource).serializable_hash.to_json
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:first_name, :last_name, :email, :password)}
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:first_name, :last_name, :password, :current_password)}
  end
end
