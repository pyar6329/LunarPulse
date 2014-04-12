class MoonQuake < ActiveRecord::Base
  has_many :amplitudes
  belongs_to :seismometer
  belongs_to :quake_category
end
