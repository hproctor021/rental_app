Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :homes
      get '/homes', to: 'homes#index'
      resources :photos
      resources :transactions
      resources :reservations
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      post '/register', to: 'users#create'
      get '/auto_login', to: 'users#auto_login'
      get '/users/:id/profile', to: 'users#show'
      get '/users', to: 'users#index'
      patch '/users/:id/edit', to: 'users#update'
    end
  end
end
