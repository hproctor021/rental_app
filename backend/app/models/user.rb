class User < ApplicationRecord
    has_many :reservations
    has_many :homes
    has_many :transactions

    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    
end
