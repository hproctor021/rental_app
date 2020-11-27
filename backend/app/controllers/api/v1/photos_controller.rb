class Api::V1::PhotosController < ApplicationController

    def index
        @photos = Photo.all
        render json: @photos
    end

    def create
        @photo = Photo.create(photo_params)
        render json: @photo
    end 

    private 
    
    def photo_params
        params.require(:photo).permit(:image, :image_name)
    end 

end
