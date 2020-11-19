import { SimpleTopAppBar, TopAppBarFixedAdjust } from "rmwc";

const Mobile = ({open, setOpen}) => {
    return <div className="MobileView">
  <SimpleTopAppBar
    title="test"
    navigationIcon
    onNav={() => console.log('Navigate')}
    actionItems={[
      {
        icon: 'file_download',
        onClick: () => console.log('Do Something')
      },
      { icon: 'print', onClick: () => console.log('Do Something') },
      { icon: 'bookmark', onClick: () => console.log('Do Something') }
    ]}
  />
  <TopAppBarFixedAdjust />
</div>
}

export default Mobile;