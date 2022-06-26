class PagesController < BaseApplicationController
  before_action :authenticate_user!, except: %i[index]

  def index
  end
end