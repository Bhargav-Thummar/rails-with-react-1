Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'home#index'

  # api routes
  namespace :api, defaults: {format: 'json'} do
    resources :home, only: [:index]
  end

  resources :home, only: [:index]
end
