class Home < ApplicationRecord
    belongs_to :user
    has_many :photos
    has_many :reservations
end
