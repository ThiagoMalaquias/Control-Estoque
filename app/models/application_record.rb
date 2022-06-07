class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true 

  def self.search(search)
	  if search
	    where('name LIKE ?', "%#{search}%")
	  end
	end
end
