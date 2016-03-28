class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true


  def self.in_bounds(bounds)
  # bounds in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  #... query logic goes here
    Bench.where("lat > (?) AND
                 lat < (?) AND
                 lng > (?) AND
                 lng < (?)",
                 bounds[:southWest][:lat],
                 bounds[:northEast][:lat],
                 bounds[:southWest][:lng],
                 bounds[:northEast][:lng]
                )

  end

end

# "lat > (?) AND
# lat < (?) AND
# lng < (?) AND
# lng > (?)"
#
#
# ,bounds[:southWest][:lat],
# bounds[:northEast][:lat],
# bounds[:southWest][:lng],
# bounds[:northEast][:lng]
