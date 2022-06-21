Rails.application.routes.draw do
  devise_for :users,
             controllers: {
                sessions: 'users/sessions',
                registrations: 'users/registrations'
             }

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  get '*path', to: 'pages#index', via: :all
end
