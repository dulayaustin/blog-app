module ResultsToActiveRecordRellation
  # Converts searchkick results to active record relation
  #
  # Example usage
  #   products = Product.search('*').to_ar_relation
  #   products.all
  def to_ar_relation(order_as_specified: true)
    ids = results.map(&:id)

    if order_as_specified
      self.klass.where(id: ids).order_as_specified(id: ids)
    else
      self.klass.where(id: ids)
    end
  end
end

Searchkick::Results.include ResultsToActiveRecordRellation