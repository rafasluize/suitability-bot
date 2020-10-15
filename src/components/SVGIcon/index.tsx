import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

const getViewBox = (name: string): string => {
  switch (name) {
    case 'logo':
      return '0 0 230 150'

    default:
      return '0 0 32 32'
  }
}

const getPath = (name: string, props: Object): ReactNode => {
  switch (name) {
    case 'logo':
      return (
        <g>
          <path
            fill="#fff"
            stroke="none"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M56.164 111.249h-8.15c-1.133 0-1.812.452-2.114 1.583l-5.528 20.583-6.396-20.583c-.3-1.047-1.046-1.572-2.091-1.58l-.002-.003h-5.906l-.002.003c-1.045.008-1.792.533-2.092 1.58l-6.396 20.583-5.528-20.583c-.302-1.131-.981-1.583-2.114-1.583h-8.15c-1.358 0-1.962.83-1.584 2.111l10.867 34.002c.302 1.055 1.132 1.583 2.19 1.583h7.244c1.056 0 1.887-.528 2.189-1.583l6.329-19.803 6.329 19.803c.302 1.055 1.132 1.583 2.188 1.583h7.245c1.057 0 1.887-.528 2.19-1.583l10.867-34.002c.377-1.281-.227-2.111-1.585-2.111zm21.906 28.13c-4.995 0-9.044-4.162-9.044-9.296 0-5.134 4.05-9.296 9.044-9.296 4.994 0 9.043 4.162 9.043 9.296 0 5.134-4.049 9.296-9.043 9.296zm18.47-28.13h-7.541c-1.207 0-1.886.677-1.886 1.883v1.677c-3.092-2.881-7.072-4.615-11.416-4.615-9.844 0-17.825 8.905-17.825 19.889s7.981 19.889 17.825 19.889c4.344 0 8.324-1.734 11.416-4.615v1.677c0 1.205.679 1.883 1.886 1.883h7.541c1.207 0 1.886-.678 1.886-1.883v-33.902c0-1.206-.679-1.883-1.886-1.883zm132.521 13.797v22.014c0 1.206-.679 1.885-1.887 1.885h-7.547c-1.208 0-1.887-.679-1.887-1.885v-21.034c0-3.77-2.189-5.428-5.056-5.428-3.396 0-5.51 1.884-5.51 6.333v20.129c0 1.206-.679 1.885-1.886 1.885h-7.548c-1.207 0-1.886-.679-1.886-1.885v-33.926c0-1.207.679-1.885 1.886-1.885h7.548c1.207 0 1.886.678 1.886 1.885v1.558c1.774-2.619 4.987-4.498 9.812-4.498 7.018 0 12.075 5.427 12.075 14.852zm-64.5.98c1.166-3.759 4.102-5.805 8.345-5.805 3.329 0 6.658 1.515 7.824 5.805h-16.169zm8.42-15.832c-11.924 0-20.226 8.67-20.226 19.902 0 11.235 8 19.904 20.528 19.904 7.698 0 13.887-3.392 16.83-9.952.604-1.205-.151-2.034-1.509-2.034h-7.245c-.982 0-1.585.376-2.34.979-1.359 1.131-3.471 1.885-5.585 1.885-3.933 0-7.454-1.779-8.826-6.258h25.203c1.132 0 1.887-.528 2.038-1.733.075-.905.151-1.81.151-2.791 0-11.383-8-19.902-19.019-19.902zm-24.45.451c1.283-.226 1.963.603 1.963 1.81v8.895c0 1.207-.529 1.81-1.51 1.81-4.226-.15-8.302 1.96-8.302 7.992v15.907c0 1.207-.679 1.885-1.887 1.885h-7.546c-1.208 0-1.887-.678-1.887-1.885v-33.926c0-1.206.679-1.885 1.887-1.885h7.546c1.208 0 1.887.679 1.887 1.885v4.075c1.126-3.785 4.1-6 7.849-6.562v-.001zm-26.033 0c1.283-.226 1.962.603 1.962 1.81v8.895c0 1.207-.529 1.81-1.509 1.81-4.227-.15-8.303 1.96-8.303 7.992v15.907c0 1.207-.679 1.885-1.886 1.885h-7.547c-1.208 0-1.887-.678-1.887-1.885v-33.926c0-1.206.679-1.885 1.887-1.885h7.547c1.207 0 1.886.679 1.886 1.885v4.075c1.127-3.785 4.101-6 7.85-6.562v-.001zm15.561-52.975c0 4.952-4.019 8.966-8.976 8.966a1.883 1.883 0 01-1.884-1.881v-39.37c0-1.04.844-1.882 1.884-1.882h7.092c1.04 0 1.884.842 1.884 1.882V57.67zm-18.099 7.085c0 1.04-.843 1.881-1.883 1.881h-7.093a1.882 1.882 0 01-1.883-1.881V36.168c0-1.039.843-1.881 1.883-1.881h7.093c1.04 0 1.883.842 1.883 1.881v28.587zm-18.099 0c0 1.04-.843 1.881-1.883 1.881h-7.092a1.882 1.882 0 01-1.883-1.881V30.808c0-1.038.842-1.88 1.883-1.88h7.092c1.04 0 1.883.842 1.883 1.88v33.947zM127.199 0h-25.338c-18.99 0-34.387 15.38-34.387 34.351v53.907c0 1.04.843 1.882 1.883 1.882H127.2c18.992 0 34.387-15.38 34.387-34.352V34.351C161.586 15.38 146.191 0 127.199 0z"
          />
        </g>
      )

    default:
      return <path />
  }
}

interface IProps {
  name: string
  fill?: string
  viewBox?: string
  style?: {}
  width?: string
  className?: string
  height?: string
}
const SVGIcon: React.FC<IProps> = ({ name, fill, viewBox, width, className, height }) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
)
export default SVGIcon

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string
}

SVGIcon.defaultProps = {
  fill: '',
  viewBox: '',
  width: '100%',
  className: '',
  height: '100%'
}