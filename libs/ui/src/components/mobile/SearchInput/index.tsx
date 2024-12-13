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
        leftIcon={<SearchIcon width="$5" height="$5" />}
        {...(hasFilter && { rightIcon: <FilterIcon />, pr: 50 })}
        placeholder={placeholder}
        editable={!onPress}
        containerStyle={{
          onPress,
          backgroundColor: '$white',
          borderRadius: '$2',
        }}
        fontSize="$4"
        onPress={onPress}
        {...props}
      />
    );
  }
);
