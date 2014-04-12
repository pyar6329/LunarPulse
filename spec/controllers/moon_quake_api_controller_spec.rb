require 'spec_helper'

describe MoonQuakeApiController do

  describe "GET 'api'" do
    it "returns http success" do
      get 'api'
      response.should be_success
    end
  end

end
