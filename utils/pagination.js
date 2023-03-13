module.exports.paginateResults = async (query, page = 1, limit = 10) => {
  const count = await query.countDocuments()
  const totalPages = Math.ceil(count / limit)

  if (page > totalPages) {
    page = totalPages
  } else if (page < 1) {
    page = 1
  }

  const results = await query
    .skip((page - 1) * limit)
    .limit(limit)
    .exec()

  return {
    currentPage: page,
    totalPages: totalPages,
    limit: limit,
    count: count,
    results: results
  }
}
