## Task

Create a simple system for a laboratory, that will allow to place new and retrieve existing orders, to be interacted with using a REST API, where:

- every order has one or more samples 
- a sample has to belong to only one patient and one order
- there are two kinds of samples - blood tests and covid tests
- an order cannot be updated or changed; however, it can be marked as cancelled, which should also mark its samples as such
- API users can create orders with a single endpoint, providing only date and a list of patient ids and their ordered sample kind
- API users can query the data in various ways:
  - get all orders for a given date, patient id, contained sample kinds or a combination of those
  - get all samples for a given date, patient id, sample kind or a combination of those

For your convenience the database has already been seeded with patients and there is already a basic patients module, but feel free to modify it if necessary.

## Evaluation

Criteria used to evaluate your submission will include:

- is the solution working and correctly following instructions
- familiarity with Nest/MikroORM patterns and documentation
- coding style and cleanliness
- attention to detail

## Issues and questions

In case of questions, please contact the owner of this repository.
