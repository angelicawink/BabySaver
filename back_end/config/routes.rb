Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
        resources :baby_games
        resources :babies
        resources :games
        resources :users
        post '/login', :to => 'users#verify'
      end
    end
end
