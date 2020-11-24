Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :homes, :transactions, :reservations
      resources :users
      post '/login', to: 'auth#login'
      post '/register', to: 'users#create'
      get '/profile', to: 'users#profile'
      get '/users', to: 'users#index'
    end
  end
end
