package main

import (
	"errors"
	"github.com/nfnt/resize"
	"image"
	"image/draw"
	"image/jpeg"
	"image/png"
	"os"
	"strings"
)

func main() {

	index := os.Args[2]
	imgC := os.Args[1]

	///upload/gy/oldpic/5c44b484198c3.jpg
	k := "/opt/server/games-server/upload/gy/k" + index + ".png"
	imgb, _ := os.Open("/opt/server/games-server" + imgC)
	img, _ := jpeg.Decode(imgb)
	defer imgb.Close()

	wmb, _ := os.Open(k)
	watermark, _ := png.Decode(wmb)
	defer wmb.Close()

	offset := image.Pt(0, 0)
	b := watermark.Bounds()
	m := image.NewRGBA(b)
	imgW := b.Size().X
	imgH := b.Size().Y
	wd := 1400 / imgW
	newImg := ImageResize(img, 1400, imgH*wd)

	draw.Draw(m, newImg.Bounds().Add(image.Pt(50, 100)), newImg, image.ZP, draw.Src)
	draw.Draw(m, watermark.Bounds().Add(offset), watermark, image.ZP, draw.Over)
	imgw, _ := os.Create("/opt/server/games-server" + strings.Replace(imgC, "oldpic", "newpic", -1))
	jpeg.Encode(imgw, m, &jpeg.Options{jpeg.DefaultQuality})
	defer imgw.Close()
}

func ImageResize(src image.Image, w, h int) image.Image {
	return resize.Resize(uint(w), uint(h), src, resize.Lanczos3)
}

func ImageCopy(src image.Image, x, y, w, h int) (image.Image, error) {

	var subImg image.Image

	if rgbImg, ok := src.(*image.YCbCr); ok {
		subImg = rgbImg.SubImage(image.Rect(x, y, x+w, y+h)).(*image.YCbCr) //图片裁剪x0 y0 x1 y1
	} else if rgbImg, ok := src.(*image.RGBA); ok {
		subImg = rgbImg.SubImage(image.Rect(x, y, x+w, y+h)).(*image.RGBA) //图片裁剪x0 y0 x1 y1
	} else if rgbImg, ok := src.(*image.NRGBA); ok {
		subImg = rgbImg.SubImage(image.Rect(x, y, x+w, y+h)).(*image.NRGBA) //图片裁剪x0 y0 x1 y1
	} else {

		return subImg, errors.New("图片解码失败")
	}

	return subImg, nil
}
