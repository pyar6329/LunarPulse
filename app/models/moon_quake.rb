class MoonQuake < ActiveRecord::Base
  has_many :Amplitudes
  belongs_to :Seismometer
  belongs_to :QuakeCategory
end
