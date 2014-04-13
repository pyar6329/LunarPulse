class MoonMapController < ApplicationController
  def index
    @start = params[:date_from]
    @end = params[:date_to]
  end
end
