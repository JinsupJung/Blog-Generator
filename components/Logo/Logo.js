import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = () => {
  return (
    <div className="text-2xl text-center py-4 font-heading font-bold">
      블로그 자동화
      <FontAwesomeIcon icon={faBlog} className="ml-1 text-2xl text-slate-400" />
    </div>
  );
};
