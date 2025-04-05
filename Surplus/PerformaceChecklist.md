**Performance Checklist**

- Restrict list of all meals to the search engine which can disperse filtered meals to shopping cart and scheduler
- Load in meals for search engine, shopping cart, and donation in batches of at most 20
- Limit state and context to session-related data which will not have to persist across reloads (username, filtered list of meals)
- Store data that will need to persist (user specific, application specific) in a database (list of all meals, meals donated, meals selected)
- Abide by the established styling standard for aesthetics and fonts.
