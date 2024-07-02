import type { FlexProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import type { BoxProps } from '@metamask/snaps-sdk/jsx';
import type { FunctionComponent } from 'react';

import type { RenderProps } from '../Renderer';
import { Renderer } from '../Renderer';

/**
 * Get the flex props (direction and alignment) based on the Box props.
 *
 * @param props - The Box props.
 * @param props.alignment - The Box alignment.
 * @param props.direction - The Box direction.
 * @returns The flex props.
 * @example
 * const props = { alignment: 'center', direction: 'vertical' };
 * const flexProps = getFlexProps(props);
 * // => { direction: 'column', alignItems: 'center' }
 * @example
 * const props = { alignment: 'space-between', direction: 'horizontal' };
 * const flexProps = getFlexProps(props);
 * // => { direction: 'row', justifyContent: 'space-between', alignItems: 'center' }
 */
function getFlexProps({
  alignment,
  direction,
}: Pick<BoxProps, 'alignment' | 'direction'>): FlexProps {
  if (direction === 'horizontal') {
    return {
      direction: 'row',
      justifyContent: alignment,
      alignItems: 'center',
    };
  }

  return {
    direction: 'column',
    alignItems: alignment,
  };
}

/**
 * The box component. See {@link BoxProps} for the props.
 *
 * @param props - The box props.
 * @param props.id - The unique ID to use as key for the renderer.
 * @param props.direction - The box direction.
 * @param props.alignment - The box alignment.
 * @param props.children - The box content.
 * @returns The rendered box.
 */
export const Box: FunctionComponent<RenderProps<BoxProps>> = ({
  id,
  direction,
  alignment,
  children,
}) => {
  return (
    <Flex gap="1" {...getFlexProps({ alignment, direction })}>
      <Renderer id={`${id}-box`} element={children} />
    </Flex>
  );
};
