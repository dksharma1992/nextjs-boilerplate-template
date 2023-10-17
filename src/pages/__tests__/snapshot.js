import Home from '@/pages/index';
import { render } from '../../common/utils/test-utils/';

describe('Home snapshot', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
