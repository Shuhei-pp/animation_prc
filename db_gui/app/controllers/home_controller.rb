class HomeController < ApplicationController
  def top
    @items = Write.all
  end

  def write
    item = Write.new(item: params[:item_content])
    item.save
    redirect_to("/home/top")
  end
end
