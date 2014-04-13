class MoonMapController < ApplicationController
  def index
    unless params[:day_from].nil?
      @start = Date.new(params[:year_from].to_i, params[:month_from].to_i, params[:day_from].to_i).to_s
      @end = Date.new(params[:year_to].to_i, params[:month_to].to_i, params[:day_to].to_i).to_s
    end
  end
end
