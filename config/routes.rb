Rails.application.routes.draw do
# config/routes.rb
  namespace :api do
    resources :artists do
      resources :songs
    end
  end
end
