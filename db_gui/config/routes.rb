Rails.application.routes.draw do
  get 'home/top'=>"home#top"
  get '/'=>"home#top"
  post 'home/write'=>"home#write"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
