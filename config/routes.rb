Rails.application.routes.draw do

  get 'pages/about'

  get 'pages/contact'

  get 'pages/mywork'

  get 'pages/index'

  get 'pages/promotion'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post 'pages/thank_you'

scope "(:locale)", locale: /en|fr/ do
    get '/about', to: 'pages#about', as: :about
    get '/contact', to: 'pages#contact', as: :contact
    get '/mywork', to: 'pages#mywork', as: :mywork
    get '/promotion', to: 'pages#promotion', as: :promotion
  end

#  scope "(/:locale)", locale: /en|fr/ do
#  resources :products  do
#    resources :comments
#  end
#  resources :orders
#end

scope "(:locale)", locale: /en|fr/ do
  get '/:locale' => 'pages#index'
  root 'pages#index'
end







end
