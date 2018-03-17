class PagesController < ApplicationController
  def index
    # format.js
    #js test: { some_value: 'Hello from Rails!' }
  end

  def contact
 #   respond_to do |format|
   #      format.js
  #  end
  end

private
def save_my_previous_url
  #  built-in variable to save last url.
  session[:my_previous_url] = URI(request.referer || '').path
  @back_url = session[:my_previous_url]
end

end
