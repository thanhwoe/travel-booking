import { memo } from 'react';
import { Input } from '../../universal';
import { GetProps } from 'tamagui';
import { FilterIcon, SearchIcon } from '../../../icons';

interface IProps extends GetProps<typeof Input> {
  hasFilter?: boolean;
  onPress?: () => void;
}

export const SearchInput = memo<IProps>(
  ({ placeholder = 'Search', hasFilter, onPress, ...props }) => {
    return (
      <Input
        leftIcon={<SearchIcon />}
        {...(hasFilter && { rightIcon: <FilterIcon /> })}
        placeholder={placeholder}
        editable={!onPress}
        containerStyle={{
          onPress,
          backgroundColor: '$white',
          borderRadius: '$2',
        }}
        onPress={onPress}
        {...props}
      />
    );
  }
);
