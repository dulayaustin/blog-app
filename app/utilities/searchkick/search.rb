class Searchkick::Search

  def self.call(relation, options)
    self.new(relation, options).call
  end

  attr_reader :relation, :options

  def initialize(relation, options)
    @relation = relation
    @options = options
  end

  def call
    result
  end

  private

  def searchkick_search(
    keyword: '*',
    where: {},
    fields: nil,
    match: :word_start,
    operator: 'or',
    order: { _score: :desc },
    page: nil,
    per_page: 20
    )

    relation.search(
      keyword,
      where: where,
      fields: fields,
      match: match,
      operator: operator,
      order: order,
      page: page,
      per_page: per_page
    ).to_ar_relation
  end

  def result
    @result ||= searchkick_search(**options)
  end

end