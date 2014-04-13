class MainPageController < ApplicationController
  def index
    @amplitudes = Amplitude.all
    puts @amplitudes
  end
end
