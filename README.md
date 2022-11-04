## Task

Create a simple system for a laboratory, that will allow to place new and retrieve existing orders, to be interacted with using a REST API, where:

- every order has one or more samples
- a sample has to belong to only one patient and one order
- there are two kinds of samples - blood tests and covid tests
- an order cannot be updated or changed; however, it can be marked as cancelled, which should also mark its samples as such
- API users can create orders with a single endpoint
  - request has to contain date and a list of samples to create
  - each sample has to contain information about which patient the sample will belong to (patientId) and sample kind
  - request payload for creating order should be validated
- API users can query the data in various ways:
  - get all orders for a given date, patient id, contained sample kinds or a combination of those
  - get a single order given it's id
  - get all samples for a given date, patient id, sample kind or a combination of those
- endpoints should answer with appropriate status codes and common errors should be handled

For your convenience the database has already been seeded with patients and there is already a basic patients module, but feel free to modify it if necessary.

## Evaluation

Criteria used to evaluate your submission will include:

- is the solution working and correctly following instructions
- familiarity with Nest/MikroORM patterns and documentation
- coding style and cleanliness
- attention to detail

## Issues and questions

In case of questions, please contact the owner of this repository.
