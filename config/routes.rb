# -*- coding: utf-8 -*-
LunarPulse::Application.routes.draw do

  get "moon_quake_api/api"
  get "moonquake/test"
  get "top/index"
  get "hue/index"
  # root 'test_page#index'    #トップページ
  get 'test/' => 'test_page#index' #テストページ
  # get 'main/' => 'main_page#index' # メインページ
  root 'main_page#index' #トップページ
  # get 'map/' => 'moon_map#index' # 月面マップ画面
  post 'map/' => 'moon_map#index' # 月面マップ画面
  get 'stereo/' => 'moon_stereo#index' #月面ステレオ画面
  get 'hue/' => 'hue#index'


  # API
  get "moon_quake_api/duration/:start/:end" => "moon_quake_api#getDuration"
  get "moon_quake_api/duration/:start/:end/site/:site" => "moon_quake_api#getSiteDuration"
  get "moon_quake_api/start_date" => "moon_quake_api#getStartDate"
  get "moon_quake_api/end_date" => "moon_quake_api#getEndDate"
  get "moon_quake_aip/all_seismometer" => "moon_quake_api#getAllSeismometer"
  get "moon_quake_aip/all_quake_category" => "moon_quake_api#getAllQuakeCategory"


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
