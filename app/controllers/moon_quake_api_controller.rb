class MoonQuakeApiController < ApplicationController
  def api
    @amp = Amplitude.find_by(:id => 1)
    render :json => @amp.to_json
  end

  def getDuration
    @amp = Amplitude.joins(:moon_quake).where('time >= ? AND time <= ?', params[:start], params[:end]).select('amplitudes.id', 'amplitude', 'time', 'moon_quake_id', 'quake_category_id', 'seismometer_id', 'lat', 'lng').order('time asc')
    render :json => @amp.to_json
  end

  def getSiteDuration
    @amp = Amplitude.joins(:moon_quake).where('seismometer_id = ? AND time >= ? AND time <= ?', params[:site], params[:start], params[:end]).select('amplitudes.id', 'amplitude', 'time', 'moon_quake_id', 'quake_category_id', 'seismometer_id', 'lat', 'lng')
    render :json => @amp.to_json
  end

  def getStartDate
    time = Amplitude.minimum(:time)
    render :json => {'year' => time.year, 'month' => time.month, 'day' => time.day}
  end

  def getEndDate
    time = Amplitude.maximum(:time)
    render :json => {'year' => time.year, 'month' => time.month, 'day' => time.day}
  end

  def getAllSeismometer
    render :json => Seismometer.all.select('id', 'name', 'color').to_json
  end

  def getAllQuakeCategory
    render :json => QuakeCategory.all.select('id', 'name', 'color').to_json
  end
end
