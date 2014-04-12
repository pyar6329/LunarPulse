class MoonQuakeApiController < ApplicationController
  def api
    @amp = Amplitude.find_by(:id => 1)
    render :json => @amp.to_json
  end

  def getDuration
    @amp = Amplitude.where('time >= ? AND time <= ?', params[:start], params[:end])
    render :json => @amp.to_json
  end

  def getSiteDuration
    @amp = Amplitude.joins(:moon_quake).where('seismometer_id = ? AND time >= ? AND time <= ?', params[:site], params[:start], params[:end])
    render :json => @amp.to_json
  end

  def getStartDate
    time = Amplitude.maximum(:time)
    render :json => {'start' => time}
  end

  def getEndDate
    time = Amplitude.minimum(:time)
    render :json => {'end' => time}
  end

end

