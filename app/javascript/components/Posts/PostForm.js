import { Container, Row, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { ReactTrixRTEInput } from 'react-trix-rte'

function PostForm({
  register,
  handleSubmit,
  onSubmit,
  errors,
  contentDefaultValue,
}) {
  return (
    <div className="mb-4">
      <Container className="px-4 px-lg-5">
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  className="form-control"
                  {...register('title')}
                  type="text"
                  placeholder="Enter title"
                />
                {errors.title && (
                  <div
                    className="invalid-feedback"
                    style={{ display: 'block' }}
                  >
                    {errors.title?.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Content</label>
                <ReactTrixRTEInput
                  className="form-control"
                  defaultValue={contentDefaultValue}
                  {...register('content')}
                />
              </div>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
    </div>
  )
}

PostForm.propTypes = {
  register: PropTypes.objectOf(PropTypes.shape).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.shape).isRequired,
  contentDefaultValue: PropTypes.string,
}

PostForm.defaultProps = {
  contentDefaultValue: '',
}

export default PostForm
